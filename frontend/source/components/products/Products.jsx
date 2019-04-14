import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

import ProductsContext from '../../store';
import { GET_PRODUCTS } from '../../store/constants';

import { Product } from '../../components/product/Product';

import { ProductsType, PaginationType } from '../../types';

export const Products = (props) => {
  const { productsDispatch } = useContext(ProductsContext);
  const {
    data: {
      products_category: { products },
    },
    onLoadMore,
    pagination,
  } = props;

  useEffect(() => {
    productsDispatch({ type: GET_PRODUCTS, payload: products });
  }, [products]);

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
