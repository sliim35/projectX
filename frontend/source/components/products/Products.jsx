import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Waypoint } from 'react-waypoint';

import * as actionCreators from '../../store/actions';
import { ProductsType, PaginationType } from '../../types';

import { Product } from '../../components/product/Product';

const Products = (props) => {
  const {
    data: {
      products_category: { products },
    },
    onLoadMore,
    pagination,
    actions,
  } = props;

  useEffect(() => {
    actions.getProducts(products);
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

const ProductsConnected = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Products);

Products.propTypes = {
  data: PropTypes.shape({
    products_category: PropTypes.shape({
      products: ProductsType.isRequired,
    }),
  }),
  onLoadMore: PropTypes.func.isRequired,
  pagination: PaginationType.isRequired,
};

export { ProductsConnected as Products };
