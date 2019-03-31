import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Waypoint } from 'react-waypoint';

import { Product } from '../../components/product/Product';

import { ProductsType, PaginationType } from '../../types';

export const Products = (props) => {
  const {
    data: {
      products_category: { products },
    },
    onLoadMore,
    pagination,
  } = props;

  return (
    <>
      {products.map((product, index) => (
        <Fragment key={product.id}>
          <Product product={product} />
          {index === products.length - 1 && (
            <Waypoint
              onEnter={() => {
                if (pagination.page >= pagination.pagesTotal) return null;
                const newPage = pagination.page + 1;
                onLoadMore(newPage);
              }}
            />
          )}
        </Fragment>
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
  onLoadMore: PropTypes.func.isRequired,
  pagination: PaginationType.isRequired,
};
