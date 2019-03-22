import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { Content } from '../../components/content/Content';
import { Loader } from '../../components/loader/Loader';
import { ProductsGrid } from '../../components/products-grid/ProductsGrid';

import * as queries from '../../queries';

export const Category = (props) => {
  const { category_name } = props.match.params;

  return (
    <Content>
      <Query
        query={queries.PRODUCTS_CATEGORY_QUERY}
        variables={{ category_name }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return `Error! ${error.message}`;
          console.log('data:', data);
          return (
            <ProductsGrid>
              <div>1 2 3</div>
              <div>4 5 6</div>
              <div>7 8 9</div>
              <div>10 11 12</div>
            </ProductsGrid>
          );
        }}
      </Query>
    </Content>
  );
};

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_name: PropTypes.string.isRequired,
    }),
  }),
};
