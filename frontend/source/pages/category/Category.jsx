import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { Content } from '../../components/content/Content';
import { Loader } from '../../components/loader/Loader';
import { ProductsGrid } from '../../components/products-grid/ProductsGrid';
import { Products } from '../../components/products/Products';
import { LeadTitle } from '../../components/lead-title/LeadTitle';

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

          return (
            <>
              <LeadTitle>{data.products_category.name}</LeadTitle>
              <ProductsGrid>
                <Products data={data} />
              </ProductsGrid>
            </>
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
